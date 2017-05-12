const express = require('express');
const router  = express.Router();

// Require the book model
const Book = require('../models/book');

// A home route
router.get('/', (req, res) => res.render('homepage'));

// RESTful routes for the Book resource
// All URLS should contain /books

// INDEX
router.get('/books', (req, res) => {
  Book
    // finding all books inside the database
    .find()
    // unless callback in .find() method, will pass onto next promise
    .exec()
    // will run once the .find() has finished
    .then(books => {
      // once the data is defined, we can render the view
      // passing in the data => books
      res.render('books/index', { books });
    })
    // if error with getting data, .catch() will be executed
    .catch(err => {
      // when theres an error, send status code of 500
      // 500 => internal server error
      // then render error.ejs passing in error value to be err
      // err => error passed to us from mongoose
      res.status(500).render('error', { error: err });
    });
});
// NEW
router.get('/books/new', (req, res) => res.render('books/new'));
// SHOW
router.get('/books/:id', (req, res) => {
  // in order to find the correct book's data for the show page, we need to get access to it's id via the params
  // console.log(req.params);

  Book
    .findById(req.params.id)
    .exec()
    .then(book => {
      // if book is returned empty or false, render error template
      if (!book) return res.status(404).render('error', { error: 'No book found.'});
      res.render('books/show', { book });
    })
    .catch(err => {
      res.status(500).render('error', { error: err });
    });
});
// CREATE
router.post('/books', (req, res) => {
  // req.body => allows us access to the submitted data from the form
  // as an object
  // console.log(req.body);
  Book
    // calling .create() passing through req.body which is an object with all my data from the form
    .create(req.body)
    // we don't need to use .exec() because exec is only needed when quering
    // the database
    .then(() => {
      // When the .create() has finished, we want to redirect to a route with a
      // view page... the redirect method takes a url as an arguement not
      // a ejs template
      res.redirect('/books');
    });
});
// EDIT
router.get('/books/:id/edit', (req, res) => {
  Book
    .findById(req.params.id)
    .exec()
    .then(book => {
      if (!book) return res.status(404).render('error', { error: 'No book found.'});
      res.render('books/edit', { book });
    })
    .catch(err => {
      res.status(500).render('error', { error: err });
    });
});
// UPDATE
router.put('/books/:id', (req, res) => {
  Book
    .findById(req.params.id)
    .exec()
    .then(book => {
      if (!book) return res.status(404).render('error', { error: 'No book found.'});

      // reassigning old properties with the new values from the edit form data
      // e.g
      // book.title = req.body.title
      for(const field in req.body) {
        book[field] = req.body[field];
      }

      // after properties have been changed, save the new state of the book object
      return book.save();
    })
    .then(book => {
      res.redirect(`/books/${book.id}`);
    })
    .catch(err => {
      res.status(500).render('error', { error: err });
    });
});
// DELETE
router.delete('/books/:id', (req, res) => {
  Book
    .findById(req.params.id)
    .exec()
    .then(book => {
      if (!book) return res.status(404).render('error', { error: 'No book found.'});

      return book.remove();
    })
    .then(() => {
      res.redirect('/books');
    })
    .catch(err => {
      res.status(500).render('error', { error: err });
    });
});

module.exports = router;
