enum ROLES {
  ADMIN = "admin",
  VENDEDOR = "vendedor",
  CUSTOMER = "cliente"
}

type User = {
  username: string;
  role: ROLES;
}

const mendozalzUser: User = {
  username: "mendozalz",
  role: ROLES.ADMIN
}

console.log(mendozalzUser
  );

