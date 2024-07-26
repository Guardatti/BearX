export const formatDate = (date) => {
    const fecha = date.split('T')[0];
    const dateLegible = fecha.split('-').reverse().join('/');
    const hour = date.split('T')[1].split('.')[0];
    const hourLegible = hour.split(':').slice(0, 2).join(':');
    return `${dateLegible} ${hourLegible}`;
}