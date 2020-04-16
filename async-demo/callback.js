// Asynchronous
console.log('Before');
getUser(1,getRepositories);
console.log('After');

// solute callback hell
function getRepositories(user){
    getRepositories(user.gitHubUsername,getCommits);
}

function getCommits(repos){
    getCommits(repos[0],displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}

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

// Promises
// Async/await