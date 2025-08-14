"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthFacade_1 = require("./facade/AuthFacade");
async function main() {
    const auth = new AuthFacade_1.AuthFacade();
    const { id } = await auth.register('mynor@example.com', 'secreto123');
    console.log('Usuario creado:', id);
    const { token } = await auth.login('mynor@example.com', 'secreto123');
    console.log(' Token:', token);
    const perfil = await auth.getProfile(token);
    console.log('Perfil:', perfil);
    await auth.logout(token);
    console.log(' Sesión cerrada');
    // Comprobación de que el token ya no sirve:
    try {
        await auth.getProfile(token);
    }
    catch (e) {
        console.log('Esperado tras logout ->', e.message);
    }
}
main().catch(err => {
    console.error('Error:', err);
});
//# sourceMappingURL=index.js.map