"use-strict";
// The socialPosts component is the parent component.
// i. It owns the list of posts.
// ii. Its template contains the ng-repeat for posts and the “New Post” button.
// iii. The other two components are created inside of its template.

const socialPosts = {
    template: `
    <section class="main-content">
        <h1>  Grand Circus Bootcamp Thoughts </h1>
        <button ng-click="showform=true" class="new-thought"> New Thought </button>
        <section class="all-posts">
            <post-form ng-show="showform" add-post="$ctrl.addPost(newPost);"></post-form>
            <post post-list="$ctrl.postList"></post>
        </section>
    </section>
    `,
    controller: function ($element){
        const vm = this; 
        
        vm.postList = [];            
        
        vm.addPost = (newPost) => {
            vm.postList.push({
                title: newPost.title,
                info: newPost.info
            });
       
        };
    }

}


angular
    .module("thoughts")
    .component("socialPosts", socialPosts);