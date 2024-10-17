import {Router, Request, Response, RequestHandler} from 'express'

const router = Router()

router.get('/',(req: Request, res: Response) =>{
    res.render('home');
})

router.get('/login',(req: Request, res: Response) =>{
    res.render('login')
})
 
router.get('/cadastro',(req: Request, res: Response) =>{
    res.render('cadastro')
})
 

export default router