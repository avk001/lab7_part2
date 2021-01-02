import React from 'react'

import Article from './Article'
import Video from './Video'
import Popular from './Popular';
import New from './New';

import WrappedComponent from './WrappedComponent'

const SimpleHOC = WrappedComponent(New, Popular, 1000 );

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return <SimpleHOC  children={<Video {...item} />} views={item.views} />

            case 'article':
                return <SimpleHOC  children={<Article {...item} />}  views={item.views}  />
                // if(item.views >=1000) {
                //     return(
                //         <Popular children={<Article {...item} />}/>
                //     )
                // } else {
                //     return (
                //         <New children={<Article {...item} />}/>
                //     )
                // }
        }
    });
};

List.propTypes = {

}

export default List