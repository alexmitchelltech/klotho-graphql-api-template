const formatGrantKey = (resourceID: string, userID: string) => `${resourceID}-${userID}`;

/*
 * @klotho::persist {
 *   id = "grants"
 * }
 */
const grantStore = new Map();

export const checkGrant = async ({ input: { userID, resourceID } }) => {
  const grantKey = formatGrantKey(resourceID, userID);
  const grant = await grantStore.get(grantKey);
  return grant;
};

export const giveGrant = async ({ input: { userID, resourceID, permissions } }) => {
  const grantKey = formatGrantKey(resourceID, userID);
  const grant = {
    resource: {
      id: resourceID,
    },
    grantee: {
      id: userID,
    },
    permissions,
    granter: {
      id: 'system',
    },
  };

  const result = await grantStore.set(grantKey, grant);
  console.log('give grant', { ...result });
  return grant;
};

export const takeGrant = async ({ input: { userID, resourceID } }) => {
  const grantKey = formatGrantKey(resourceID, userID);
  await grantStore.delete(grantKey);
  return null;
};

