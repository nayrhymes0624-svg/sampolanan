"use client";
import { useRouter } from "next/navigation";

const a = "1";

export default function FuctionWOReturn() {
  const router = useRouter();

  function samp({year,month}:any) {
    const fullpath = `events/${year}/${month}/abc`;
    router.push(fullpath);
  }

  return<button onClick={samp}>gdfgd</button> ;
;
}
