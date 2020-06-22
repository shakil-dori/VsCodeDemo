import React from 'react';
import style from './Blog.module.css';
import ContentItem from '../contentItem/ContentItem';

export default function Blog (props){
    return(

    <div class="content">

        <div class="title">
            <h2>{props.x[0].title} How to Use Templates to Improve the Android Studio Experience</h2>
            <h5>An explainer on setting up different templates offered by Android Studio to increase productivity. </h5>
        </div>
        
        {
            props.x.map(item=>(
                <ContentItem data={item} />
            )
          )
        }

        {
            props.y.map(item=>(
                <ContentItem y={item} />
            )
          )
        }



          <div class ="profile">
                  <img src ="https://cdn-images-1.medium.com/fit/c/200/200/0*Lw3GLkgHDP11cOwR"/>
            <div class="profile_name">
                  <h5>Akshay Mukadam</h5> 
                  <button>follow</button>
                  <p>aug 14,2020. 5min read </p>
            </div>
            <div class="social_media">
               <svg>
               <path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z" />
               </svg>
               <svg>
               <path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z" />
               </svg>
            </div>
          </div>
        
          <div class="xx">
              <img src="https://miro.medium.com/max/2000/1*hMJZvFg69JPaBcMXkxOilg.jpeg"/>
              <p> Building an Android app is a fun experience, until the project grows beyond a certain threshold. Due to the recent indexing issues in Android Studio, even editing and adding new code constructs in existing layout files can be cumbersome. When you build apps day in and day out, optimising workflow is vital. In this post, I’ll take you through some useful templates that can change how you use Android Studio.</p>
              <h3>Layout Template</h3>
              <p>Imagine creating a layout. Android devs would know the pain of creating a LinearLayoutover and over</p>
              <h4>What if we reduce some mundane steps using built-in layouts?</h4>
              <img src="https://miro.medium.com/max/2000/1*hMJZvFg69JPaBcMXkxOilg.jpeg"/>
          </div>
    </div>    
    );
}