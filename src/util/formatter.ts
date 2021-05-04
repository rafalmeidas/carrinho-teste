export function capitalize(str: string) {
  const capitalize = (_str: any) => {
    if (typeof str !== 'string') {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  };
}
