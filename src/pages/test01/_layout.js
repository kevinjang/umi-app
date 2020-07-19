import {Link} from 'umi'
export default function({children}){
    return <div>
        Test Layout 
        {children}
        <Link to="/test01/test01">test01</Link>
    </div>
}