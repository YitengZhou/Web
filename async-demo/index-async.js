// Asynchronous
console.log('Before');
//getUser(1,(user)=>{
//    console.log('User',user);
//    getRepositories(user.gitHubUsername,(repos)=>{
//        console.log('Repos',repos);
//        getCommits(repos[0],(commits)=>{
//            console.log(commits);
//        });
//    });
//});

// // Promise
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('commits',commits))
//     .catch(err => console.log('Error',err.message));

// Async and wait
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err) {
        console.log('Error',err.message);
    }
}
displayCommits();

console.log('After');

function getUser(id) {
    return new Promise((resolve,reject) => {
        // Kick of some async work
        setTimeout(()=>{
            console.log('Reading a user from a database...');
            resolve({id:id,gitHubUsername:'name'});
        },2000);
    });

};

function getRepositories(username) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Calling GitHub APT...');
            //resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('Could not get the repos.'));
        }, 2000);
    });
}
function getCommits(repo) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Calling GitHub commits...');
            resolve(['commit']);
        }, 2000);
    });
}
