import React, { useEffect } from 'react';
import '../styles/postHome.css'


const PostHome = () => {

/*     function changeHeart(index){
        let heart = document.getElementById('published-post_reactions-heart-'+index)
        console.log(heart)
    } */


    const [post, setPost] = React.useState([]);
    const [posts, setPosts] = React.useState([]);
    const [users, setUsers] = React.useState([]);
    const [dataLoaded, setDataLoaded] = React.useState(false);
    const [usersPosts, setUsersPosts] = React.useState([]);

    function getPost(){
        fetch('/post.json')
        .then(res => res.json())
        .then(res => setPost(res))
    }

    function getPostApi(){
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(res => {
            setPosts(res.posts)
        })

        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(res => {
            setUsers(res.users)
        })
    }

    useEffect(() => getPost(), [])
    useEffect(() => {getPostApi(); setDataLoaded(true);}, [])
    useEffect(() => {
        if (dataLoaded) {
            const newPostDetail = posts.map(post =>{
                const userInfo = users.find(user => user.id === post.userId);
                return {
                    postContent: post.body,
                    userId: post.userId,
                    userImage: userInfo ? userInfo.image : "https://t4.ftcdn.net/jpg/02/17/34/67/360_F_217346796_TSg5VcYjsFxZtIDK6Qdctg3yqAapG7Xa.jpg",
                    user: userInfo ? userInfo.username : "Unknow User",
                    firstName: userInfo ? userInfo.firstName : "Unknow firstName",
                    lastName: userInfo ? userInfo.lastName : "Unknow lastName"
                };
              })
              setUsersPosts(newPostDetail)
              console.log(usersPosts)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataLoaded, posts, users]);


  return (
    <div>
      {
          usersPosts.map((item, index) => {
            // Generar un índice aleatorio dentro del rango del array
            const randomIndex = Math.floor(Math.random() * usersPosts.length);

            // Acceder al elemento usando el índice aleatorio
            const randomItem = usersPosts[randomIndex];

            return(
                <div key={index} className='published-post'>
                <img className='published-post_user_pic' src={randomItem.userImage} alt="" />
                <div className='published-content'>
                    <div className='published-post_text'>
                        <div className='published-post_text-user'>
                            <h3>{randomItem.firstName + randomItem.lastName}</h3>
                            <p>{randomItem.user}</p> <p>·</p><p>43m</p>
                        </div>
                        <div className='published-post_text-dots' alt='More'>
                            <span className='published-post_text-alt'>More</span>
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="r-yyyyoo3"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
                        </div>
                    </div>
                    <p>{item.postContent}</p>
                    <div className='published-post_reactions'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-dnmrzs"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
        
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-dnmrzs"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>

                      <div id={'published-post_reactions-heart-'+index} /* onClick={changeHeart(index)} */ className='published-post_reactions-heart'>
                      </div>       
                        
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-dnmrzs"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>
                    </div>
        
                </div>
            </div>
            )
          }


          )
      }
    </div>
  )
}

export default PostHome 