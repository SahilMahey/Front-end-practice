


const x = async() => new Promise ((resolve, reject)=>
{
    setTimeout(() => {
        resolve('Initializing Hack Program')
    }, 3000);
})

const y = async() => new Promise ((resolve, reject)=>
{
    setTimeout(() => {
        resolve('Hacking UserName')
    }, 4000);
})

const z = async() => new Promise ((resolve, reject)=>
{
    setTimeout(() => {
        resolve('Username Found')
    }, 5000);
})

const w = async() => new Promise ((resolve, reject)=>
{
    setTimeout(() => {
        resolve('Connecting to Facebook.......')
    }, 6000);
})

const a = async() => 
{
    x_ = await x();
    console.log(x_)
    let first_child = document.getElementsByClassName('card-body')[0]
    first_child.innerHTML = x_;
    y_ = await y();
    console.log(y_)
    let second_child = document.getElementsByClassName('card-body')[1]
    second_child.innerHTML = y_;
    z_ = await z();
    console.log(z_)
    let third_child = document.getElementsByClassName('card-body')[2]
    third_child.innerHTML = z_;
    w_ = await w();

    let fourth_child = document.getElementsByClassName('card-body')[3]
    fourth_child.innerHTML = w_;

}
a();





