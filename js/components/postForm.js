"use-strict";

// The postForm component displays the new post form.
// i. It has one outbound binding called onSubmit.

const postForm = {
    bindings: {
        addPost: "&"
    },
    
    template:`
        <form ng-submit="$ctrl.addPost({ newPost: $ctrl.newPost });" >
            <input type="text" placeholder="Title" ng-model="$ctrl.newPost.title">
            <input type="text" placeholder="Thoughts" ng-model="$ctrl.newPost.info">
            <button>Add</button>
        </form>
    `,

};

angular
    .module("thoughts")
    .component("postForm", postForm);