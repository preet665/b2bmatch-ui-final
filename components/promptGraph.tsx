import { useRouter } from 'next/navigation';

async function getTreemap() {
  const res = await fetch('http://46.101.116.31:3000/get-treemap', {
    cache: 'no-store',
    headers: {
      'Authorization': `${process.env.JWT_TOKEN}`,
    },
  });
  const data = await res.text();
  return data;
}

const PromptGrph = async () => {
  const data = await getTreemap();
  if (!data) {
    return (
      <div className="w-full h-[1000px] flex items-center justify-center">
        <h1>hi</h1>
      </div>
    );
  }
  return (
    <div className="w-full rounded-lg flex text-lg mt-2">
      <iframe
        className="w-full rounded-lg mr-3 h-[480px]"
        srcDoc={data}
      />
    </div>
  );
};

export default PromptGrph;
