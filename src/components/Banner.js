import React from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

class Banner extends React.PureComponent {
    render() {
        const { ...currentProps } = this.props;
        const { dataSource } = currentProps;
        delete currentProps.dataSource;
        delete currentProps.isMobile;
        return (
            <div {...currentProps} {...dataSource.wrapper}>
                <QueueAnim
                    key="QueueAnim"
                    type={['bottom', 'top']}
                    delay={200}
                    {...dataSource.textWrapper}
                >
                    <div key="title" {...dataSource.title}>
                        {dataSource.title.children.match(
                            /\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/
                        ) ? (
                            <img src={dataSource.title.children} className="banner-image" width="100%" alt="img" />
                        ) : (
                            dataSource.title.children
                        )}
                    </div>
                    <div className="banner-content" key="content" {...dataSource.content}>
                        {dataSource.content.children}
                    </div>
                </QueueAnim>
                <TweenOne
                    animation={{
                        y: '-=20',
                        yoyo: true,
                        repeat: -1,
                        duration: 1000,
                    }}
                    className="banner-icon"
                    key="icon"
                >
                    <Icon className="banner-icon-logo" type="down" />
                </TweenOne>
            </div>
        );
    }
}
export default Banner;