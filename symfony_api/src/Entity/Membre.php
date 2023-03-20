<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\MembreRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MembreRepository::class)]
#[ApiResource]
class Membre
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $etat = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $pseudo = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_register = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date_drop = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date_maj = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date_last_connection = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $picture_profile = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description_photographe = null;

    #[ORM\Column(length: 255)]
    private ?string $statut_personnel = null;

    #[ORM\Column(length: 255)]
    private ?string $categorie_photographe = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $website = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $reseaux_sociaux = null;

    #[ORM\OneToOne(inversedBy: 'membre', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\OneToMany(mappedBy: 'member', targetEntity: Photo::class)]
    private Collection $photos;

    #[ORM\OneToMany(mappedBy: 'membre', targetEntity: MembreConcours::class)]
    private Collection $membreConcours;

    #[ORM\OneToMany(mappedBy: 'photo', targetEntity: MembrePhoto::class)]
    private Collection $membrePhoto;

    #[ORM\OneToMany(mappedBy: 'concours', targetEntity: MembreConcoursWin::class)]
    private Collection $membreConcoursWin;

    public function __construct()
    {
        $this->photos = new ArrayCollection();
        $this->member_vote = new ArrayCollection();
        $this->member_jury = new ArrayCollection();
        $this->membreConcours = new ArrayCollection();
        $this->membrePhoto = new ArrayCollection();
        $this->membreConcoursWin = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isEtat(): ?bool
    {
        return $this->etat;
    }

    public function setEtat(bool $etat): self
    {
        $this->etat = $etat;

        return $this;
    }

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(?string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    public function getDateRegister(): ?\DateTimeInterface
    {
        return $this->date_register;
    }

    public function setDateRegister(\DateTimeInterface $date_register): self
    {
        $this->date_inscription = $date_register;

        return $this;
    }

    public function getDateDrop(): ?\DateTimeInterface
    {
        return $this->date_drop;
    }

    public function setDateDrop(?\DateTimeInterface $date_drop): self
    {
        $this->date_drop = $date_drop;

        return $this;
    }

    public function getDateMaj(): ?\DateTimeInterface
    {
        return $this->date_maj;
    }

    public function setDateMaj(?\DateTimeInterface $date_maj): self
    {
        $this->date_maj = $date_maj;

        return $this;
    }

    public function getDateLastConnection(): ?\DateTimeInterface
    {
        return $this->date_last_connection;
    }

    public function setDateLastConnection(?\DateTimeInterface $date_last_connection): self
    {
        $this->date_last_connection = $date_last_connection;

        return $this;
    }

    public function getPictureProfile(): ?string
    {
        return $this->picture_profile;
    }

    public function setPictureProfile(?string $picture_profile): self
    {
        $this->picture_profile = $picture_profile;

        return $this;
    }

    public function getDescriptionPhotographe(): ?string
    {
        return $this->description_photographe;
    }

    public function setDescriptionPhotographe(?string $description_photographe): self
    {
        $this->description_photographe = $description_photographe;

        return $this;
    }

    public function getStatutPersonnel(): ?string
    {
        return $this->statut_personnel;
    }

    public function setStatutPersonnel(string $statut_personnel): self
    {
        $this->statut_personnel = $statut_personnel;

        return $this;
    }

    public function getCategoriePhotographe(): ?string
    {
        return $this->categorie_photographe;
    }

    public function setCategoriePhotographe(?string $categorie_photographe): self
    {
        $this->categorie_photographe = $categorie_photographe;

        return $this;
    }

    public function getWebsite(): ?string
    {
        return $this->website;
    }

    public function setWebsite(?string $website): self
    {
        $this->website = $website;

        return $this;
    }

    public function getReseauxSociaux(): ?string
    {
        return $this->reseaux_sociaux;
    }

    public function setReseauxSociaux(?string $reseaux_sociaux): self
    {
        $this->reseaux_sociaux = $reseaux_sociaux;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection<int, Photo>
     */
    public function getPhotos(): Collection
    {
        return $this->photos;
    }

    public function addPhoto(Photo $photo): self
    {
        if (!$this->photos->contains($photo)) {
            $this->photos->add($photo);
            $photo->setMember($this);
        }

        return $this;
    }

    public function removePhoto(Photo $photo): self
    {
        if ($this->photos->removeElement($photo)) {
            // set the owning side to null (unless already changed)
            if ($photo->getMember() === $this) {
                $photo->setMember(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, MembreConcours>
     */
    public function getMembreConcours(): Collection
    {
        return $this->membreConcours;
    }

    public function addMembreConcour(MembreConcours $membreConcour): self
    {
        if (!$this->membreConcours->contains($membreConcour)) {
            $this->membreConcours->add($membreConcour);
            $membreConcour->setMembre($this);
        }

        return $this;
    }

    public function removeMembreConcour(MembreConcours $membreConcour): self
    {
        if ($this->membreConcours->removeElement($membreConcour)) {
            // set the owning side to null (unless already changed)
            if ($membreConcour->getMembre() === $this) {
                $membreConcour->setMembre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, MembrePhoto>
     */
    public function getMembrePhoto(): Collection
    {
        return $this->membrePhoto;
    }

    public function addMembrePhoto(MembrePhoto $membrePhoto): self
    {
        if (!$this->membrePhoto->contains($membrePhoto)) {
            $this->membrePhoto->add($membrePhoto);
            $membrePhoto->setPhoto($this);
        }

        return $this;
    }

    public function removeMembrePhoto(MembrePhoto $membrePhoto): self
    {
        if ($this->membrePhoto->removeElement($membrePhoto)) {
            // set the owning side to null (unless already changed)
            if ($membrePhoto->getPhoto() === $this) {
                $membrePhoto->setPhoto(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, MembreConcoursWin>
     */
    public function getMembreConcoursWin(): Collection
    {
        return $this->membreConcoursWin;
    }

    public function addMembreConcoursWin(MembreConcoursWin $membreConcoursWin): self
    {
        if (!$this->membreConcoursWin->contains($membreConcoursWin)) {
            $this->membreConcoursWin->add($membreConcoursWin);
            $membreConcoursWin->setConcours($this);
        }

        return $this;
    }

    public function removeMembreConcoursWin(MembreConcoursWin $membreConcoursWin): self
    {
        if ($this->membreConcoursWin->removeElement($membreConcoursWin)) {
            // set the owning side to null (unless already changed)
            if ($membreConcoursWin->getConcours() === $this) {
                $membreConcoursWin->setConcours(null);
            }
        }

        return $this;
    }
}
