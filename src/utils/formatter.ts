import MESSAGE from '@/constants/ko/message';

const formatMessage = (maxLength: number = 20) => {
  const sentences = MESSAGE.Text.replace(/\.\s+/, '.').split(/\./g);
  const messages = sentences.map(sentence => {
    if (sentence.length <= maxLength) return sentence;

    const lines = sentence.replace(/,/, ',\n').split(/\n/g);
    const newLines: string[] = [];
    lines.forEach(line => {
      if (line.length <= maxLength) {
        newLines.push(line);
      } else {
        const words = line.split(/\s+/g);

        const lineCount = Math.ceil(line.length / maxLength);
        const spaceCount = line.match(/\s/g)?.length || 0;
        const windowSize = Math.ceil(spaceCount / lineCount);

        let start = 0;
        let end = windowSize;
        while (start < words.length) {
          let newLine = words.slice(start, end).join(' ');
          const currLineCount = newLines.length;
          if (currLineCount < lineCount) {
            // newLine.length < maxLength check 필요
            newLines.push(newLine);
          } else {
            end = words.length;
            newLine = words.slice(start, end).join(' ');
            newLines.push(newLine);
          }
          start += windowSize;
          end += windowSize;
        }
      }
    });
    return newLines.join('\n');
  });
  return messages;
};

export default formatMessage;
