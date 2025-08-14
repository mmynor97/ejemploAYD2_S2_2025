import { AuthFacade } from './facade/AuthFacade';

async function main() {
  const auth = new AuthFacade();

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
  } catch (e: any) {
    console.log('Esperado tras logout ->', e.message);
  }
}

main().catch(err => {
  console.error('Error:', err);
});