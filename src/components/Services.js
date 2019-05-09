import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis enim et porttitor aliquam. Ut finibus volutpat massa, a convallis ex tristique eu. Suspendisse venenatis erat ac ante placerat ultrices. Suspendisse tristique sapien quis neque semper convallis.'

            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis enim et porttitor aliquam. Ut finibus volutpat massa, a convallis ex tristique eu. Suspendisse venenatis erat ac ante placerat ultrices. Suspendisse tristique sapien quis neque semper convallis.'

            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis enim et porttitor aliquam. Ut finibus volutpat massa, a convallis ex tristique eu. Suspendisse venenatis erat ac ante placerat ultrices. Suspendisse tristique sapien quis neque semper convallis.'

            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis enim et porttitor aliquam. Ut finibus volutpat massa, a convallis ex tristique eu. Suspendisse venenatis erat ac ante placerat ultrices. Suspendisse tristique sapien quis neque semper convallis.'

            }
        ]
    }
  render() {
    return (
      <div>
        <Title title='Services'/>
        
      </div>
    )
  }
}
