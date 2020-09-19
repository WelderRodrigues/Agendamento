import {NowRequest, NowResponse} from '@vercel/node'

export default (request: NowRequest, response: NowResponse) => {
    const { name, number, address } = request.body;

    return response.json({msg: `Olá ${name} ${number} ${address}`})
}