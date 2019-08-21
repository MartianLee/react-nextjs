import React from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import Page from '../components/page'

class Other extends React.Component {
    static async getInitialProps (props) {
        const { store, isServer } = props.ctx
        return { isServer }
    }

    componentDidMount () {
    }

    render () {
        const router = useRouter()
        const { pid } = router.query

        return <Page title='Other Page' linkTo='/' NavigateTo='Post {pid}' />
    }
}

export default connect()(Other)
