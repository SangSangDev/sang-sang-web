export default function About() {

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4">
        <header className="text-xl font-bold text-center mb-4">반응형 웹앱</header>

        <main className="grid gap-4 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        xl:grid-cols-6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-lg p-4 text-center"
            >
              카드 {i + 1}
            </div>
          ))}
        </main>
      </div>
    </>
  )
}