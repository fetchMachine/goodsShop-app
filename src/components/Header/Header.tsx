import {PageHeader, Divider} from "antd"
import { Link } from 'react-router-dom';
export const Header = () => {
return (
    <>
    <Link to="/" >
    <PageHeader title="Good shop" />
    <Divider />
    </Link>
    </>
)
}