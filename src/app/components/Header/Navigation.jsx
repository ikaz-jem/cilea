

async function getLinks (){
  const res = await fetch('http://localhost:3000/api/navigation',{cache:'no-store'})
  return res.json()

}

const Navigation = async () => {

const links = await getLinks()

  return (
    <div className="flex gap-2">
      {links?.map((link, i) => (
        <p key={i} className="text-sm text-neutral-500">{link.name}</p>
      ))}
    </div>
  );
};

export default Navigation;
