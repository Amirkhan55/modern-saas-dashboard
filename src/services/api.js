// Backend integration placeholder.
// Replace these mock functions with fetch/axios calls to your NestJS/Node.js API.

export const api = {
  users: {
    getAll: async () => [],
    getById: async (id) => ({ id }),
    create: async (data) => data,
    update: async (id, data) => ({ id, ...data }),
    remove: async (id) => id
  },
  projects: {
    getAll: async () => [],
    create: async (data) => data,
    update: async (id, data) => ({ id, ...data })
  },
  analytics: {
    getOverview: async () => ({})
  }
};