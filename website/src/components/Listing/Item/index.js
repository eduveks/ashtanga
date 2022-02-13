import React from 'react';
import { Col } from 'antd';

import './index.less';

export default ({ section, type, image, image_title, image_alt, title, content, link }) => {
  let layout = null;
  if (type === 'asanas') {
    layout = (
      <Col className={`listing__${type}__item`} xs={12} sm={8} md={8} lg={6} xlg={4}>
        <div className={`listing__${type}__item__image__container`}>
          <img src={`/images/${section}/${image}`}  alt={ image_alt } title={ image_title } />
        </div>
        <h4>{title}</h4>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </Col>
    );
  } else if (type === 'carousel') {
      layout = (
          <div>
            <img src={`/images/${section}/${image}`} />
            <p className="legend" dangerouslySetInnerHTML={{ __html: content }}></p>
          </div>
      );
  } else if (type === 'OTHER-CUSTOM-TYPE-HERE') {
    layout = (
      <li className={`listing__item__${type}`} style={{ backgroundImage: `url(/images/${section}/${image})` }}>
        <div className={`listing__item__${type}__content`}>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </li>
    );
  } else {
    layout = (
      <li className="listing__item">
        <div className={`listing__item`}>
          <h1>{title}</h1>
          <img src={`/images/${section}/${image}`}  alt={ image_alt } title={ image_title } />
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </li>
    );
  }
  return (
      layout
  );
}
