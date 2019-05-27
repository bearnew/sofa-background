import * as React from "react";
import { Layout } from "antd";
import AsideMenu from "./AsideMenu/";
import MainLayout from "./MainLayout/";
import "./style.pcss";

const { Sider } = Layout;

interface HomeState {
    collapsed: boolean;
    count: number;
}

export default class Home extends React.Component<any, any> {
    state: HomeState = {
        collapsed: false,
        count: 0
    };
    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <React.Fragment>
                <div>后台管理系统</div>
            </React.Fragment>
        );
    }
}
