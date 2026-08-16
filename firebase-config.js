/* ============================================================
   Configuração do Firebase
   ------------------------------------------------------------
   1. Crie um projeto em https://console.firebase.google.com
   2. Adicione um app da Web (ícone </>)
   3. Copie o objeto firebaseConfig que aparece e cole aqui
   4. Em Authentication > Sign-in method, ative "Google" e "E-mail/senha"
   5. Em Authentication > Settings > Authorized domains, adicione
      seuusuario.github.io

   Estas chaves são públicas por natureza — quem protege os dados são
   as regras do Firestore (veja o README).
   ============================================================ */
export const firebaseConfig = {
  apiKey: "COLE_SUA_API_KEY_AQUI",
  authDomain: "COLE_SEU_PROJETO.firebaseapp.com",
  projectId: "COLE_SEU_PROJETO",
  storageBucket: "COLE_SEU_PROJETO.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000"
};
