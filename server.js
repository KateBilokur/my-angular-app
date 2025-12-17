const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);

const JWT_SECRET = 'dev_secret';
const TOKEN_EXPIRES_IN = '2h';

function getToken(req) {
  const auth = req.headers.authorization || '';
  const [type, token] = auth.split(' ');
  return type === 'Bearer' ? token : null;
}

server.post('/register', (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  const users = router.db.get('users');
  if (users.find({ email }).value()) {
    return res.status(409).json({ message: 'User exists' });
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  const user = { id: Date.now(), email, passwordHash };
  users.push(user).write();

  const accessToken = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRES_IN }
  );

  res.status(201).json({ accessToken });
});

server.post('/login', (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  const user = router.db.get('users').find({ email }).value();
  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const accessToken = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRES_IN }
  );

  res.json({ accessToken });
});

server.use(router);


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  console.log(`POST /register | POST /login | GET /items`);
});
