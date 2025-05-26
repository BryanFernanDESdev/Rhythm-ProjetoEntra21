import bcrypt from 'bcryptjs'

export const generatePassword = async (req, res, next) => {
    const { senha } = req.body
    if (!senha) res.status(400).send('senha inválida')

    try {
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(senha, salt);

        req.body.senha = hash;
        next();
    } catch (err) {
        console.error('Erro ao gerar hash da senha:', err);
        res.status(500).send('Erro interno do servidor');
    }
}

export const checkPassword = async (req, res, next) => {
    const { senha } = req.body;
    const id = req.params.id;

    if (!senha) res.status(400).send('senha inválida')

    try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`)
        if (!response) throw new Error('erro ao verificar a senha')

        const data = await response.json()

        const ehValido = bcrypt.compare(senha, data.senha)
        if (ehValido) {
            res.status(200).send(true)
        }else{
            res.status(401).send('senha incorreta')
        }
    } catch (err) {
        res.status(500).send('Erro interno do servidor');
    }
}