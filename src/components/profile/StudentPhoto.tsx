function StudentPhoto({ src, name }: { src?: string; name?: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={src || "/placeholder-profile.png"}
        alt={name || "Student"}
        className="h-32 w-32 rounded-full object-cover border-4 border-card shadow-md"
      />
      {name && <p className="font-medium">{name}</p>}
    </div>
  );
}

export default StudentPhoto;
