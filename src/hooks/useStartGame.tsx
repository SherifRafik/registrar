import useGetRandomActor from "@/hooks/useGetRandomActor";

const useStartGame = () => {
  const firstActor = useGetRandomActor();
  const secondActor = useGetRandomActor();

  return [firstActor, secondActor];
};

export default useStartGame;
