module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c4e9d53ace08055370a0a2d4b2999dba'),
  },
});
