import React, { Component } from 'react';
import * as ReactBootstrap  from 'react-bootstrap';

const { 
        FormGroup, FormControl, Button,
        Checkbox
      } = ReactBootstrap;

export default class Filter extends Component {

    render() {
        const brand = [
            {id: 1, name: 'Tất cả'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Samsung'},
            {id: 4, name: 'Sony'},
            {id: 5, name: 'Nokia'},
            {id: 6, name: 'Asus'},
            {id: 7, name: 'HTC'},
            {id: 8, name: 'Oppo'}
        ];

        const price = [
            {id: 1, name: 'Tất cả'},
            {id: 2, name: 'Dưới 1 triệu'},
            {id: 3, name: 'Từ 1-3 triệu'},
            {id: 4, name: 'Từ 3-5 triệu'},
            {id: 5, name: 'Từ 5-10 triệu'},
            {id: 6, name: 'Trên 10 triệu'}
        ];

        const display = [
            {id: 1, name: 'Tất cả'},
            {id: 2, name: 'Dưới 3 inch'},
            {id: 3, name: 'Từ 3-4 inch'},
            {id: 4, name: 'Từ 4-5 inch'},
            {id: 5, name: 'Từ 5-6 inch'},
            {id: 6, name: 'Trên 6 inch'}
        ];

        const os = [
            {id: 1, name: 'Tất cả'},
            {id: 2, name: 'Android'},
            {id: 3, name: 'IOS'},
            {id: 4, name: 'Windows'}
        ];

        return (

            <div className="filter">
                <h3>Bộ lọc</h3>
                <div className="filter-container">
                    <div className="filter-item">
                        <h4>Hãng sản xuất</h4>
                        <ul className="filter-list">


                            {
                                brand.map((item, i ) => 
                                    <li key={i}>
                                        <Checkbox>{item.name}</Checkbox>
                                    </li>
                                )
                            }
                         
                        </ul>
                    </div>

                    <div className="filter-item">
                        <h4>Mức giá</h4>
                        <ul className="filter-list">
                            {
                                price.map((item, i) =>
                                    <li key={i}>
                                        <Checkbox>{item.name}</Checkbox>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    
                    <div className="filter-item">
                        <h4>Màn hình</h4>
                        <ul className="filter-list">
                            {
                                display.map((item, i) =>
                                    <li key={i}>
                                        <Checkbox>{item.name}</Checkbox>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="filter-item">
                        <h4>Hệ điều hành</h4>
                        <ul className="filter-list">
                            {
                                os.map((item, i) =>
                                    <li key={i}>
                                        <Checkbox>{item.name}</Checkbox>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}