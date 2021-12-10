import Router from 'next/router'

export default function BackButton() {
    return (
        <div onClick={() => Router.back()}><button className='btn-goback'>Go Back</button></div>
    )
}