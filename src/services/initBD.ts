
import { User } from '../models/user';

export default function iniciarBD(db: any) {
  const crearUsuarios = function (usuarios: User[]) {
    usuarios.forEach((usuario: User) => {
      db.collection("Users")
        .doc(usuario.name)
        .set({
          name: usuario.name,
          userName: usuario.username,
          password: usuario.password
        });
    });
  };

  crearUsuarios([
    {
      name: "juan",
      username: "juestor",
      password: "Test123!"
    }
  ]);
}