const posts =
[
    { title: 'Post 1', body: 'This post one' },
    { title: 'Post 2', body: 'This post two' },
];

function getPosts()
{
    setTimeout(() =>
    {
        let output = '';

        posts.forEach((post, index) =>
        {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback)
{
    setTimeout(() =>
    {
        posts.push(post);
        callback();
    }, 2000);
}

createPost(
{
    title: 'Post 3',
    body: 'This post three'
}, getPosts);

