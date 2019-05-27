import * as React from "react";
import { Layout } from "antd";
import AsideMenu from "./AsideMenu/";
import MainLayout from "./MainLayout/";
import "./style.pcss";
import { read } from "fs";

const { Sider } = Layout;

interface HomeState {
    collapsed: boolean;
    count: number;
    imgFile: string;
    src: string;
}

export default class Home extends React.Component<any, any> {
    state: HomeState = {
        collapsed: false,
        count: 0,
        imgFile: '',
        src: ''
    };
    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    // 此处可用https://cloudinary.com/存储图片
    imgChange = (event: any) => {
        console.log(event.target)
        console.log(event.target.files[0])
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
            console.log(reader.result)
            this.setState({
                src: reader.result
            })
        }
    };
    render() {
        return (
            <React.Fragment>
                <div>后台管理系统</div>
                <img src={this.state.src} width="200" />
                <input type="file" className="img-file" onChange={this.imgChange.bind(this)} accept="image/png, image/jpeg, image/gif, image/jpg" />
            </React.Fragment>
        );
    }
}
