import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

const {Grid, Row, Col} = ReactBootstrap;

export default class ProductList extends Component {
    
    render() {

        const interested = [
            {id: 1, name: 'Samsung Galaxy J7 Pro', price: '6.990.000', img: 'img/product/j7pro.png', sale: ''},
            {id: 2, name: 'OPPO A71', price: '4.690.000', img: 'img/product/oppo-a71.png', sale: ''},
            {id: 3, name: 'OPPO F3', price: '6.990.000', img: 'img/product/oppo-f3.png', sale: ''},
            {id: 4, name: 'IPhone 6 32GB (2017)', price: '8.990.000', img: 'img/product/ip6.png', sale: '9.999.000'},
            {id: 5, name: 'Samsung Galaxy J3 Pro', price: '6.990.000', img: 'img/product/j3pro.png', sale: ''}
        ];

        const remarkable = [
            {id: 1, name: 'Samsung Galaxy J7 Pro', price: '6.990.000', img: 'img/product/j7pro.png', sale: ''},
            {id: 2, name: 'IPhone 6 32GB (2017)', price: '8.990.000', img: 'img/product/ip6.png', sale: '9.999.000'},
            {id: 3, name: 'OPPO F3', price: '6.990.000', img: 'img/product/oppo-f3.png', sale: ''},
            {id: 4, name: 'Samsung Galaxy Note 8', price: '22.490.000', img: 'img/product/note8.png', sale: ''},
            {id: 5, name: 'Samsung Galaxy J3 Pro', price: '6.990.000', img: 'img/product/j3pro.png', sale: ''}
        ];

        const laptop = [
            {id: 1, name: 'Dell Ins N3567/i5-7200U', price: '11.190.000', img: 'img/product/dell-N3567.png', sale: ''},
            {id: 2, name: 'Dell Inspiron N3567C', price: '10.390.000', img: 'img/product/dell-N3567C.png', sale: ''},
            {id: 3, name: 'Dell N3467', price: '10.890.000', img: 'img/product/dell-N3467.png', sale: ''},
            {id: 4, name: 'Asus X541UV-GO607', price: '13.290.000', img: 'img/product/asus-x541uv.png', sale: ''},
            {id: 5, name: 'Asus Vivobook S15 S510UQ-BQ321T', price: '16.990.000', img: 'img/product/asus-S15.png', sale: ''}
        ];

        const accessories = [
            {id: 1, name: 'Sạc dự phòng Prolink 15000mAh', price: '800.000', img: 'img/product/sac-prolink.png', sale: ''},
            {id: 2, name: 'Thẻ nhớ MicroSD 16Gb Sandisk class 10', price: '250.000', img: 'img/product/sd16.png', sale: ''},
            {id: 3, name: 'Thẻ nhớ Micro SD 64GB Sandisk C10', price: '790.000', img: 'img/product/sd64.png', sale: ''},
            {id: 4, name: 'Bao da iPhone 7 Plus Rock Dr.V Gold', price: '299.000', img: 'img/product/7p-rock.png', sale: ''},
            {id: 5, name: 'Sạc dự phòng Yoobao 10000mAh', price: '690.000', img: 'img/product/yoobao.png', sale: ''}
        ];


        return (

            
            
            <div className="main-product">
                <Grid>
                    <div className="product-list">
                        <h3>Điện thoại được quan tâm</h3>
                        <div className="product-container">
                            {
                                interested.map((item, i) => 
                                    <div className="product-item" key={i}>
                                        <a href="#"><img src={item.img} alt={item.name}/></a>
                                        <p className="product-name">{item.name}</p>
                                        {
                                            item.sale !== '' ? 
                                            (
                                                <p className="price">
                                                    {item.price}đ 
                                                    <span className="sale">{item.sale} đ</span>
                                                </p>   
                                            ) :

                                            (
                                                <p className="price">
                                                    {item.price}đ 
                                                </p>   
                                            )
                                        }
                                         
 
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="product-list">
                        <h3>Sản phẩm nổi bật</h3>
                        <div className="product-container">
                            {
                                remarkable.map((item, i) => 
                                    <div className="product-item" key={i}>
                                        <a href="#"><img src={item.img} alt={item.name}/></a>
                                        <p className="product-name">{item.name}</p>
                                        {
                                            item.sale !== '' ? 
                                            (
                                                <p className="price">
                                                    {item.price}đ 
                                                    <span className="sale">{item.sale} đ</span>
                                                </p>   
                                            ) :

                                            (
                                                <p className="price">
                                                    {item.price}đ 
                                                </p>   
                                            )
                                        }
                                         
 
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="product-list">
                        <h3>Laptop bán chạy</h3>
                        <div className="product-container">
                            {
                                laptop.map((item, i) => 
                                    <div className="product-item" key={i}>
                                        <a href="#"><img src={item.img} alt={item.name}/></a>
                                        <p className="product-name">{item.name}</p>
                                        {
                                            item.sale !== '' ? 
                                            (
                                                <p className="price">
                                                    {item.price}đ 
                                                    <span className="sale">{item.sale} đ</span>
                                                </p>   
                                            ) :

                                            (
                                                <p className="price">
                                                    {item.price}đ 
                                                </p>   
                                            )
                                        }
                                         
 
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="product-list"> 
                        <h3>Phụ kiện hot</h3>
                        <div className="product-container">
                            {
                                accessories.map((item, i) => 
                                    <div className="product-item" key={i}>
                                        <a href="#"><img src={item.img} alt={item.name}/></a>
                                        <p className="product-name">{item.name}</p>
                                        {
                                            item.sale !== '' ? 
                                            (
                                                <p className="price">
                                                    {item.price}đ 
                                                    <span className="sale">{item.sale} đ</span>
                                                </p>   
                                            ) :

                                            (
                                                <p className="price">
                                                    {item.price}đ 
                                                </p>   
                                            )
                                        }
                                         
 
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Grid>
                
            </div>
        );
    }
}