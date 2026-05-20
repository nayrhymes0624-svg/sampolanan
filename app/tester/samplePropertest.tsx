type GreetingProps = {
    Lname: string;
    Fname: string;
};


export default function SamplePropertest(Props: GreetingProps) {
    const { Lname,Fname } = Props;
    return <button> {Lname},{Fname} </button>
}
