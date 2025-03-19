/**
 * @swagger
 * tags:
 *   - name: AUTH
 *     description: Endpoints relacionados con la autenticación de usuarios.
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *       - AUTH
 *     summary: Crear un nuevo usuario
 *     description: Este endpoint permite crear un usuario nuevo proporcionando un correo electrónico y una contraseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: usuario@ejemplo.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: ContraseñaSegura123
 *             required:
 *               - email
 *               - password
 *     responses:
 *       "201":
 *         description: Usuario creado exitosamente.
 *       "400":
 *         description: Solicitud inválida. Asegúrese de proporcionar un correo y una contraseña válidos.
 *       "500":
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - AUTH
 *     summary: Iniciar sesión
 *     description: Este endpoint permite a un usuario iniciar sesión proporcionando un correo electrónico y una contraseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: usuario@ejemplo.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: ContraseñaSegura123
 *             required:
 *               - email
 *               - password
 *     responses:
 *       "200":
 *         description: Inicio de sesión exitoso. Devuelve un token de autenticación.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       "401":
 *         description: Credenciales inválidas. Verifique su correo y contraseña.
 *       "500":
 *         description: Error interno del servidor.
 */
