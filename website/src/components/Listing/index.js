import React from 'react';
import { Row } from 'antd';

import { Carousel } from 'react-responsive-carousel';

import Item from './Item';

import './index.less';

export default ({section, type, image, image_title, image_alt, title, content, items}) => {
    const children = [];
    for (const item of items) {
        children.push(<Item {...{type, ...item}} />);
    }

    let listLayout = (
      <div>
        <h1>{ title }</h1>
        <div className="listing__title-border"></div>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
          <ul className={`listing__${type}`}>
            { children }
        </ul>   
      </div>   
    );

    if (type === 'asanas') {
      listLayout = (
        <div>
          <h1>{ title }</h1>
          <div className="listing__title-border"></div>
          <div dangerouslySetInnerHTML={{__html: content}}></div>
          <Row className={`listing__${type}`} justify="center">
            { children }
          </Row>
        </div>
      );
    } else if (type === 'carousel') {
        listLayout = (
            <Carousel>
              { children }
            </Carousel>
        );
    } else if (type === 'OTHER-CUSTOM-TYPE-HERE') {
      listLayout = (
          <Row className={`listing__${type}`}>
            { children }
          </Row>
        );
    }

    return (
        <section className="listing">
          { listLayout }
        </section>
    );
}
