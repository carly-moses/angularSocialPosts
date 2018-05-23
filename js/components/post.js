"use-strict";

// The post component displays a single post in the list.
// i. It has one inbound binding called post.

const post = {
    bindings: {
        postList: "<"
    },

    template: `
    <section>
        <div class="each-post" ng-repeat="post in $ctrl.postList"> 
            <p class="post-title">{{post.title}}</p>
            <p class="post-info">{{post.info}} </p>
        </div>
    </section>
    `,
}


angular
    .module("thoughts")
    .component("post", post);