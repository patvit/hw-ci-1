// export default function sum(items) {
//   let result = 0;
//   for (const item of items) {
//     result += item;
//   }
//   return result;
// }

export default function getHPstatus(player) {
  let statusHP = '';
  if (player.health >= 50) statusHP = 'healthy';
  else if (player.health >= 15) statusHP = 'wounded';
  else statusHP = 'critical';
  return statusHP;
}