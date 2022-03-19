const { param } = require('express/lib/request');
const res = require('express/lib/response');
const { Pizza, Comment} = require('../models')

const commentController = {
    addComment({params, body}, res) {
        console.log(body); 
        Comment.create(body)
            .then(({_id}) => {
                console.log(_id)
                return Pizza.findOneAndUpdate(
                    {_id: params.pizzaId},
                    {$push: {comments: _id}},
                    {new: true}
                );
            })
            .then(dbPizzaData => {
                if(!dbPizzaData) {
                    res.stats(404).json({message:"No pizza found with this id"});
                    return;
                }
                res.json(dbPizzaData)
            })
            .catch(err => res.json(err));
    }, 



    removeComment() {
        Comment.findOneAndDelete({_id: params.commentId})
        .then(deletedComment => {
            if(!deletedComment) {
                return res.status(404).json({message: 'No comment with this id'});
            }
            return Pizza.findOneAndUpdate (
                {_id: params.pizzaId},
                { $pull:{comments: parmas.commentId}},
                {new: true} 
            );
        })
        .then(dbPizzaData => {
            if (!dbPizzaData) {
                res.status(404).json({ message: 'No pizza found with this id!' });
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.json(err));
    }
}; 

module.exports = commentController