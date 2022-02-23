import Account_Cmp from "../Components/Account";
import { parseCookies } from 'nookies';

function Account() {

    return (
        <>
            <Account_Cmp />
        </>
    )
}

export async function getServerSideProps(ctx) {
    const cookie = parseCookies(ctx);

    if (!cookie.Token) {
        const { res } = ctx
        res.writeHead(302, { Location: "/Login" })
        res.end()
    }

    return {
        props: {}
    }
}

export default Account;