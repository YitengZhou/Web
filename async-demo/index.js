// Asynchronous
console.log('Before');
getUser(1,(user)=>{
    console.log('User',user);
    getRepositories(user.gitHubUsername,(repos)=>{
        console.log('Repos',repos);
        getCommits(repos[0],(commits)=>{
            console.log(commits);
        });
    });
});
console.log('After');

// Synchronous上述代码同步情况如下
// console.log('Before');
// const user = getUser(1);
// const repos = getRepositories(User.gitHubUsername);
// const commits = getCommits(repos[0]);
// console.log('After');

// Callbacks
function getUser(id,callback) {
    setTimeout(()=>{
        console.log('Reading a user from a database...');
        callback({id:id,gitHubUsername:'name'});
    },2000);
};

function getRepositories(username,callback) {
    setTimeout(()=>{
        console.log('Calling GitHub APT...');
        callback(['repo1','repo2','repo3']);
    },2000);
}
function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['commit']);
    }, 2000);
}

// Callback
// Promises
// Async/await