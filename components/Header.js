import Link from 'next/link'

const linkStyle = {
    marginRight: 15,
    color: 'red',
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About Me</a>
        </Link>
        <Link href="/css-test">
            <a style={linkStyle}>CSS Test (Style JSX)</a>
        </Link>

    </div>
)

export default Header